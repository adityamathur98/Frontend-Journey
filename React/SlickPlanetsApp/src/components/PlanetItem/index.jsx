const PlanetItem = (props) => {
  const { planetDetails } = props;
  const { name, imageUrl, description } = planetDetails;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={imageUrl}
        className="w-[250px] h-[250px] md:w-[405px] md:h-[292px]"
        alt={`planet ${name}`}
      />
      <h1 className="text-[#f8fafc] font-Roboto text-[20px] md:text-[32px] md:mt-[40px]">
        {name}
      </h1>
      <p className="text-center text-[#f1f5f9] font-Roboto font-[16px] max-w-[800px] md:text-[20px] md:mb-[40px]">
        {description}
      </p>
    </div>
  );
};

export default PlanetItem;
