const leftNav = () => {
  return (
    <div>
      <img
        className="h-8 ml-5 mobile:hidden tablet:block"
        src="src/assets/images/amazon-logo-white.png"
        alt=""
      />
      <img
        className="h-9 tablet:hidden mobile:block mobile:ml-7 "
        src="src/assets/images/amazon-mobile-logo-white.png"
        alt=""
      />
    </div>
  );
};

export default leftNav;
