import { APKUrl, IOSUrl } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const ApkDownloadBtns = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href={APKUrl}>
        <Image
          src="/images/playstorebtn.png"
          alt="google play store button image"
          width={125}
          height={50}
          className="object-contain"
        />
      </Link>
      <Link href={IOSUrl}>
        <Image
          src="/images/appstorebtn.png"
          alt="app store button image"
          width={125}
          height={50}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default ApkDownloadBtns;
