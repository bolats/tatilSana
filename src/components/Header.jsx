import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DesktopNavigation from "@/components/header/DesktopNavigation";
import MobileMenu from "@/components/header/MobileMenu";
import MobileMenuButton from "@/components/header/MobileMenuButton";
import { useMobileMenu } from "@/hooks/useMobileMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const { user, logout } = useAuth();

  const userName = user?.profile?.name || user?.user_metadata?.name || "Kullanıcı";
  const userAvatarUrl = user?.profile?.avatar_url || user?.user_metadata?.avatar_url || "";
  const userEmail = user?.email || "kullanici@example.com";
  const avatarFallback = userName?.charAt(0).toUpperCase() || "K";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dpoalndyg/image/upload/v1746808378/tatilsana_new_logo_wqjhr7.png"
            alt="Tatilsana Logo"
            className="h-10"
          />
        </Link>

        <DesktopNavigation />

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatarUrl} alt={userName} />
                    <AvatarFallback className="bg-primary text-white">
                      {avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">{userName}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {userEmail}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profil" className="cursor-pointer flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profilim</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/rezervasyonlarim" className="cursor-pointer flex w-full items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Rezervasyonlarım</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Çıkış Yap</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/giris">
                <Button variant="outline" size="sm">
                  Giriş Yap
                </Button>
              </Link>
              <Link to="/kayit">
                <Button size="sm">Üye Ol</Button>
              </Link>
            </>
          )}
        </div>

        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu} 
        user={user} 
        logout={logout} 
      />
    </header>
  );
};

export default Header;