
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Mail, Edit3, Save, Image as ImageIcon, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const { user, updateProfile, logout: authLogout } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar_url: "", 
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.profile?.name || user.user_metadata?.name || "",
        email: user.email || "",
        avatar_url: user.profile?.avatar_url || user.user_metadata?.avatar_url || "",
      });
      setAvatarPreview(user.profile?.avatar_url || user.user_metadata?.avatar_url || "");
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    let newAvatarUrl = formData.avatar_url;

    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, avatarFile, { upsert: true });

      if (uploadError) {
        toast({ title: "Avatar Yükleme Hatası", description: uploadError.message, variant: "destructive" });
        setIsUploading(false);
        return;
      }
      
      const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
      newAvatarUrl = urlData.publicUrl;
    }
    
    await updateProfile({ 
      name: formData.name, 
      avatar_url: newAvatarUrl 
    });
    
    setAvatarFile(null);
    setIsEditing(false);
    setIsUploading(false);
  };
  
  const handleLogout = async () => {
    await authLogout();
  };

  if (!user) {
    return <div className="flex justify-center items-center h-screen"><p>Lütfen giriş yapın.</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-32 h-32 mx-auto mb-4"
            >
              <Avatar className="w-full h-full border-4 border-primary">
                <AvatarImage src={avatarPreview || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || "K")}&background=random&color=fff`} alt={formData.name} />
                <AvatarFallback className="text-4xl bg-secondary text-secondary-foreground">
                  {(formData.name || user.email || "K")?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/80 transition-colors">
                  <ImageIcon size={16} />
                  <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                </label>
              )}
            </motion.div>
            <CardTitle className="text-3xl font-bold">{isEditing ? "Profili Düzenle" : formData.name}</CardTitle>
            <CardDescription>{formData.email}</CardDescription>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center"><User className="mr-2 h-4 w-4 text-gray-500" />Ad Soyad</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center"><Mail className="mr-2 h-4 w-4 text-gray-500" />E-posta (Değiştirilemez)</Label>
                  <Input id="email" name="email" type="email" value={formData.email} className="mt-1" disabled />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 gap-2" disabled={isUploading}>
                    {isUploading ? "Kaydediliyor..." : <><Save className="h-4 w-4" />Kaydet</>}
                  </Button>
                  <Button variant="outline" onClick={() => { 
                      setIsEditing(false); 
                      setFormData({ name: user.profile?.name || user.user_metadata?.name || "", email: user.email || "", avatar_url: user.profile?.avatar_url || user.user_metadata?.avatar_url || "" }); 
                      setAvatarPreview(user.profile?.avatar_url || user.user_metadata?.avatar_url || "");
                      setAvatarFile(null);
                    }} 
                    className="flex-1"
                    disabled={isUploading}
                  >
                    İptal
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <Button onClick={() => setIsEditing(true)} className="w-full max-w-xs mx-auto gap-2">
                  <Edit3 className="h-4 w-4" /> Profili Düzenle
                </Button>
              </div>
            )}
            <hr className="my-8" />
            <div className="text-center">
                <Button variant="destructive" onClick={handleLogout} className="w-full max-w-xs mx-auto gap-2">
                  <LogOut className="h-4 w-4" /> Çıkış Yap
                </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
