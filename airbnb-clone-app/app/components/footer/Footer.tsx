import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnb Plus",
        "Airbnb Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessibility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "HOST",
      links: [
        "Papa React",
        "Presents",
        "Zero to Full Stack Hero",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Trust & Safety",
        "Say Hi Youtube",
        "Easer Eggs",
        "Contact Us",
      ],
    },
  ];
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-800">
        {links.map((link) => (
          <div key={link.title} className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{link.title}</h5>
            {link.links.map((item) => (
              <Link href={item} key={item} className="block">{item}</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
