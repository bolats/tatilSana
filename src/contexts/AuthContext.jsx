import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('name, avatar_url')
          .eq('id', session.user.id)
          .single();

        if (error && error.code !== 'PGRST116') { 
          console.error("Error fetching profile:", error);
        }
        
        setUser({ 
          ...session.user, 
          profile: profile || { 
            name: session.user.user_metadata?.name, 
            avatar_url: session.user.user_metadata?.avatar_url 
          } 
        });
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('name, avatar_url')
            .eq('id', session.user.id)
            .single();

          if (error && error.code !== 'PGRST116') {
            console.error("Error fetching profile on auth change:", error);
          }
          setUser({ 
            ...session.user, 
            profile: profile || { 
              name: session.user.user_metadata?.name, 
              avatar_url: session.user.user_metadata?.avatar_url 
            } 
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({
        title: "Giriş başarısız",
        description: error.message,
        variant: "destructive",
      });
      return { success: false, error: error.message };
    }
    toast({
      title: "Giriş başarılı!",
      description: "Hoş geldiniz, hesabınıza giriş yaptınız.",
    });
    navigate("/");
    return { success: true };
  };

  const register = async (name, email, password) => {
    setLoading(true);
    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`;
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
          avatar_url: defaultAvatar,
        }
      }
    });

    if (authError) {
      setLoading(false);
      toast({
        title: "Kayıt başarısız",
        description: authError.message,
        variant: "destructive",
      });
      return { success: false, error: authError.message };
    }

    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          name: name,
          avatar_url: defaultAvatar,
          plain_password: password, 
          updated_at: new Date()
        });

      if (profileError) {
        console.error("Error saving profile:", profileError);
        toast({
          title: "Profil oluşturma hatası",
          description: profileError.message,
          variant: "destructive",
        });
      }
    }

    setLoading(false);

    if (authData.user && authData.user.identities && authData.user.identities.length === 0) {
      toast({
        title: "Kayıt Başarısız",
        description: "Bu e-posta adresi zaten kullanımda olabilir veya bir sorun oluştu.",
        variant: "destructive",
      });
      return { success: false, error: "User already registered or other issue." };
    }
    
    toast({
      title: "Kayıt başarılı!",
      description: "Hesabınız oluşturuldu. Lütfen e-postanızı kontrol ederek hesabınızı doğrulayın.",
    });
    navigate("/"); 
    return { success: true, user: authData.user };
  };

  const logout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      toast({
        title: "Çıkış başarısız",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    setUser(null);
    toast({
      title: "Çıkış yapıldı",
      description: "Başarıyla çıkış yaptınız.",
    });
    navigate("/");
  };

  const updateProfile = async (profileData) => {
    if (!user) return;
    setLoading(true);

    const updates = {
      id: user.id,
      name: profileData.name,
      avatar_url: profileData.avatar_url || user.profile?.avatar_url,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);
    setLoading(false);

    if (error) {
      toast({
        title: "Profil güncelleme başarısız",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setUser(prevUser => ({
        ...prevUser,
        profile: {
          ...prevUser.profile,
          name: updates.name,
          avatar_url: updates.avatar_url,
        },
        user_metadata: { // user_metadata'yı da güncelleyelim ki tutarlı olsun
          ...prevUser.user_metadata,
          name: updates.name,
          avatar_url: updates.avatar_url,
        }
      }));
      toast({
        title: "Profil güncellendi",
        description: "Profil bilgileriniz başarıyla güncellendi.",
      });
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};