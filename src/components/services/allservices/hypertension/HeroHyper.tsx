

const HeroHyper = () => {
  return (
    <>
     <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/hypertension.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg max-w-xl mx-auto">
            Cardiology - Hypertension & Cholesterol Management
          </p>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default HeroHyper