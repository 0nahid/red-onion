import Logo from "../Logo/Logo";

export default function MainFooter() {
  // footer links
  const FooterLinks = [
    { id: 1, text: "About Online Food" },
    { id: 2, text: "Read our blog" },
    { id: 3, text: "Sign up to deliver" },
    { id: 4, text: "Add your restaurant" },
    { id: 5, text: "Get Help" },
    { id: 6, text: "Ask any question" },
    { id: 7, text: "Order Now" },
    { id: 8, text: "Contact" },
    { id: 9, text: "Facebook" },
    { id: 10, text: "Instagram" },
    { id: 11, text: "Twitter" },
    { id: 12, text: "Youtube" },
  ];

  return (
    <div className="flex flex-wrap pb-8 -mx-6">
      {/* logo  */}
      <div className="flex flex-grow flex-shrink hidden md:block">
        <Logo />
      </div>
      {/* footer links  */}
      <div className="flex flex-wrap flex-grow sm:mx-auto sm:flex-nowrap sm:space-x-12 sm:justify-between">
        <div className="flex flex-col py-3 space-y-2 min-w-full items-center border-b border-slate-200 sm:border-b-0 sm:min-w-0 sm:items-start sm:pt-0">
          {FooterLinks.slice(0, 4).map((item) => (
            <span className="text-white cursor-pointer " key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col py-3 space-y-2 min-w-full items-center border-b border-slate-200 sm:border-b-0 sm:min-w-0 sm:items-start sm:pt-0">
          {FooterLinks.slice(4, 8).map((item) => (
            <span className="text-white cursor-pointer " key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col py-3 space-y-2 min-w-full items-center border-b border-slate-200 sm:border-b-0 sm:min-w-0 sm:items-start sm:pt-0">
          {FooterLinks.slice(8, 12).map((item) => (
            <span className="text-white cursor-pointer " key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
