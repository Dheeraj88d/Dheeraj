import bgi from "../../assets/images/bgi.png";

const Confident = () => {
  const items = [
    { title: "PROJECTS WORKED", value: "60+" },
    { title: "CLIENTS", value: "60+" },
    { title: "TEAM MEMBERS", value: "7+" },
  ];

  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-6 py-8"
      style={{
        backgroundImage: `url(${bgi})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "135px", // Adjust height as per your background image dimensions
       
      }}
    >
     <div className="flex flex-row w-full justify-evenly items-center">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            {/* Value */}
            <span className="font-inter text-white text-[50px] block leading-none">
              {item.value}
            </span>
            {/* Title */}
            <span className="text-white text-[18px] uppercase tracking-wider mt-[5px] block">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Confident;
