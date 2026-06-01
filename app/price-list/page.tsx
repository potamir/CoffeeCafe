import Image from "next/image";

export default function PriceList() {
  return (
    <main
      className="relative min-h-screen bg-repeat"
      style={{ backgroundImage: "url('/images/pricelistbg.png')" }}
    >
      <Image
        src="/images/pricelist.png"
        alt="Price List"
        fill
        className="object-contain object-center"
        priority
      />
    </main>
  );
}
