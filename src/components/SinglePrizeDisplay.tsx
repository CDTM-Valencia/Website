import { Prize } from '@/constants/prizes';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Star } from 'lucide-react';
import { useState } from 'react';
import { PrizeModal } from '@/components/PrizeModal';

interface SinglePrizeDisplayProps {
  prize: Prize;
  title: string;
  description?: string;
  className?: string;
}

export function SinglePrizeDisplay({
  prize,
  title,
  description,
  className = '',
}: SinglePrizeDisplayProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getPrizeStyle = () => {
    const baseStyle =
      'relative flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full min-h-[300px]';

    if (prize.name.toLowerCase().includes('ibm')) {
      return `${baseStyle} bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-lg`;
    } else {
      return `${baseStyle} bg-gradient-to-br from-springPaleBlue to-white border-2 border-springBlue/20 shadow-md`;
    }
  };

  const getPrizeIcon = () => {
    if (prize.name.toLowerCase().includes('ibm')) {
      return <Star className="w-8 h-8 text-blue-500 mb-4" />;
    } else {
      return <Gift className="w-8 h-8 text-springBlue mb-4" />;
    }
  };

  return (
    <div className={`mb-8 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-springBlue mb-2">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>

      <div className="max-w-md mx-auto">
        <Card
          className="overflow-hidden hover:shadow-xl transition-all duration-300"
          onClick={() => prize.image && setIsModalOpen(true)}
        >
          <div className={getPrizeStyle()}>
            {/* Prize Image */}
            {prize.image && (
              <div className="mb-6 w-32 h-32 flex items-center justify-center">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* Prize Icon (fallback if no image) */}
            {!prize.image && (
              <div className="mb-6 w-16 h-16 flex items-center justify-center">
                {getPrizeIcon()}
              </div>
            )}

            {/* Prize Name */}
            <h3 className="text-xl font-semibold text-springBlue text-center mb-3">
              {prize.name}
            </h3>

            {/* Prize Description */}
            <p className="text-gray-600 text-center mb-4 leading-relaxed">
              {prize.description}
            </p>

            {/* Value Badge */}
            {prize.value && (
              <Badge
                variant="secondary"
                className="bg-springBlue/10 text-springBlue text-sm font-medium mb-4"
              >
                {prize.value}
              </Badge>
            )}

            {/* Sponsor Info */}
            {prize.sponsor && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>by</span>
                {prize.sponsorLogo ? (
                  <a
                    href={prize.sponsorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={prize.sponsorLogo}
                      alt={`${prize.sponsor} logo`}
                      className="h-5 w-auto"
                    />
                  </a>
                ) : (
                  <span className="font-medium">{prize.sponsor}</span>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Prize Modal */}
      <PrizeModal
        prize={prize}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
