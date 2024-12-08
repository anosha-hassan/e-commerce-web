import React from 'react';
import Image from 'next/image';
import PIC1Image from '@/Pictures/PIC1.png';
import PIC2Image from '@/Pictures/PIC2.png';
import PIC3Image from '@/Pictures/PIC3.png';
import PIC4Image from '@/Pictures/PIC4.png';
import PIC5Image from '@/Pictures/PIC5.png';
import PIC6Image from '@/Pictures/PIC6.png';
import PIC7Image from '@/Pictures/PIC7.png';
import PIC8Image from '@/Pictures/PIC8.png';
import PIC9Image from '@/Pictures/PIC9.png';

const ShareSetup: React.FC = () => {
  return (
    <div className="share-setup bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Share your setup<br />with<br />#FuniroFurniture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Image src={PIC1Image} alt="Setup 1" layout="responsive" width={274} height={382} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC2Image} alt="Setup 2" layout="responsive" width={451} height={312} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC3Image} alt="Setup 3" layout="responsive" width={425} height={433} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC4Image} alt="Setup 4" layout="responsive" width={290} height={348} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC5Image} alt="Setup 5" layout="responsive" width={290} height={392} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC6Image} alt="Setup 6" layout="responsive" width={381} height={323} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC7Image} alt="Setup 7" layout="responsive" width={344} height={242} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC8Image} alt="Setup 8" layout="responsive" width={178} height={242} className="rounded-lg" />
          </div>
          <div className="relative">
            <Image src={PIC9Image} alt="Setup 9" layout="responsive" width={258} height={196} className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareSetup;




