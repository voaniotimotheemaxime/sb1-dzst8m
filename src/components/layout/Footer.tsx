export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">NoveoDigital</h3>
            <p className="text-sm text-muted-foreground">
              Votre partenaire pour une présence digitale réussie.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Développement Web</li>
              <li>Design UX/UI</li>
              <li>SEO</li>
              <li>Marketing Digital</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Suivez-nous</h3>
            <ul className="space-y-2 text-sm">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NoveoDigital. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}