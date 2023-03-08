import Image from "next/legacy/image";

export default function Info() {
  return (
    <section className="min-h-screen space-y-4" id="info">
      <h2 className="text-white text-2xl font-semibold text-center">
        Sobre <span className="text-primary">Mi</span>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full h-96 shadow-md">
          <img
            alt="Nicolas Pereira"
            src={
              "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg"
            }
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2">info</div>
      </div>
    </section>
  );
}
