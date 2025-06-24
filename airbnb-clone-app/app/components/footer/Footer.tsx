const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-800">
        {/* ABOUT Section */}
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        {/* COMMUNITY Section */}
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>Its a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Papafam</p>
        </div>

        {/* HOST Section */}
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Papa React</p>
          <p>Presents</p>
          <p>Zero to Full Stack Hero</p>
          <p>Hundreds of Students</p>
          <p>Join Now</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Say Hi Youtube</p>
          <p>Easer Eggs</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;