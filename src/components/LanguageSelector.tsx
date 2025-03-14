import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 transition-opacity hover:opacity-70">
            <Globe className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[140px] bg-white">
          <DropdownMenuLabel className="font-tiltwarp font-bold uppercase text-sm">{t('nav', 'language')}</DropdownMenuLabel>
          <DropdownMenuItem 
            onClick={() => setLanguage('en')} 
            className={cn(
              "flex items-center font-tiltwarp font-bold uppercase text-sm cursor-pointer hover:bg-accent/50",
              language === 'en' && "bg-primary/10 text-primary hover:bg-primary/20"
            )}
          >
            {t('nav', 'english')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setLanguage('fr')} 
            className={cn(
              "flex items-center font-tiltwarp font-bold uppercase text-sm cursor-pointer hover:bg-accent/50",
              language === 'fr' && "bg-primary/10 text-primary hover:bg-primary/20"
            )}
          >
            {t('nav', 'french')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
