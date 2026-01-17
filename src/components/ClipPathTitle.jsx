const ClipPathTitle = ({ title, className }) => {
  return (
    <div className="general-title">
      <div
        className={`${className} border border-white! border-b-8 rounded-t-2xl rounded-bl-2xl text-nowrap opacity-0 bg-white/10`}
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 52% 100%)",
        }}
      >
        <div className="pb-5 md:px-14 px-3 md:pt-0 pt-3">
          <h2 className="" style={{ color: "white" }}>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
