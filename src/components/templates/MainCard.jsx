function MainCard({ children, templateStyle }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={`sm:pt-0 bg-white rounded-2xl shadow-2xl ${templateStyle}`}>{children}</div>
    </div>
  );
}

export default MainCard;
