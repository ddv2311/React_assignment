function TopOfferBar() {
  return (
    <div className="w-full bg-black text-white py-2 px-4">
      <p className="text-xs sm:text-sm text-center leading-relaxed">
        Sign up and get <span className="font-semibold">20% off</span> on your first order.{" "}
        <a
          href="#"
          className="underline font-medium ml-1 hover:text-gray-300"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}

export default TopOfferBar;
