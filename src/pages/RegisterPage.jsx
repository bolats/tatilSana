import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: "Hata", description: "Şifreler eşleşmiyor!", variant: "destructive" });
      return;
    }
    if (!agreedToTerms) {
      toast({ title: "Hata", description: "Kullanım koşullarını kabul etmelisiniz.", variant: "destructive" });
      return;
    }
    const result = await register(name, email, password);
    if (result.success && result.user) {
      // User is automatically logged in if email confirmation is disabled in Supabase settings
      toast({
        title: "Kayıt Başarılı!",
        description: "Hesabınız oluşturuldu ve giriş yapıldı.",
      });
      navigate("/"); 
    } else if (result.success && !result.user) {
       // This case might occur if there's an issue post-signup but before user object is fully available.
       // Or if email confirmation IS enabled, this path could be hit.
      toast({
        title: "Kayıt İşlemi Neredeyse Tamamlandı",
        description: "Lütfen e-postanızı kontrol ederek hesabınızı doğrulayın.",
      });
      navigate("/giris"); // Or a page that says "check your email"
    }
    // AuthContext's register function already handles specific error toasts.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <UserPlus className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-bold">Hesap Oluştur</CardTitle>
            <CardDescription>Yeni bir hesap oluşturmak için bilgilerinizi girin.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Adınız Soyadınız</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta Adresi</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="•••••••• (en az 6 karakter)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Şifre Tekrar</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={setAgreedToTerms}
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  <Link to="/kullanim-sartlari" className="text-primary hover:underline">Kullanım koşullarını</Link> ve <Link to="/gizlilik-politikasi" className="text-primary hover:underline">gizlilik politikasını</Link> kabul ediyorum.
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={loading || !agreedToTerms}>
                {loading ? "Hesap Oluşturuluyor..." : "Hesap Oluştur"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm">
            <p className="text-gray-600">
              Zaten bir hesabınız var mı?{" "}
              <Link to="/giris" className="font-medium text-primary hover:underline">
                Giriş yapın.
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegisterPage;