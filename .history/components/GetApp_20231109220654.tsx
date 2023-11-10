import Button from "./Button";

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className=" z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!{" "}
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div>
            <Button
              type="button"
              title="Download App"
              variant="btn_white"
              icon="/apple.svg"
              full
            />
            <Button
              type="button"
              title="Download App"
              variant="btn_white"
              icon="/andr.svg"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
