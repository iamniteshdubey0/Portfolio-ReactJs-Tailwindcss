

const SectionHeading = ({title, label}) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center capitalize">
      {label}
      <span className="text-primary mx-4 capitalize">{title} </span>
    </h2>
  );
};

export default SectionHeading;
