const Footer = () => {
  return (
    <footer className="border-t border-border py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} meruTV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
