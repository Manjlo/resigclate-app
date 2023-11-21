function PointForm({ data, recyPointSelected }) {
  return (
    <article className="w-[350px] h-[92vh] flex flex-col">
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <img className="rounded-t-lg"
                  src={feature.properties.url_image}
                  alt={feature.properties.nombre}
                />
              )}
          </div>
        );
      })}
      <div></div>
      <div></div>
      <div></div>
    </article>
  );
}

export default PointForm;
