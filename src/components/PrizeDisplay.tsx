import { Prize } from '@/constants/prizes';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gift, Star, Medal } from 'lucide-react';
import { useState } from 'react';
import { PrizeModal } from '@/components/PrizeModal';
import { CASH_PRIZES } from '@/constants/prizes';

interface PrizeDisplayProps {
  prizes: Prize[];
  title: string;
  description?: string;
  icon: React.ReactNode;
  className?: string;
}

export function PrizeDisplay({
  prizes,
  title,
  description,
  icon,
  className = '',
}: PrizeDisplayProps) {
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getPrizeIcon = (prize: Prize, index: number) => {
    if (
      prize.name.toLowerCase().includes('special') ||
      prize.name.toLowerCase().includes('ibm')
    ) {
      return <Star className="w-5 h-5 text-springBlue" />;
    } else {
      return <Gift className="w-5 h-5 text-springBlue" />;
    }
  };

  const getPrizeStyle = (prize: Prize, index: number) => {
    const baseStyle =
      'relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full min-h-[280px]';

    // Use consistent blue styling for all prize cards
    return `${baseStyle} bg-gradient-to-br from-springPaleBlue to-white border-2 border-springBlue/20 shadow-sm`;
  };

  return (
    <div className={`mb-12 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          {icon}
          <h2 className="text-3xl font-bold text-springBlue">{title}</h2>
        </div>
        {description && <p className="text-gray-600">{description}</p>}
      </div>

      <div className="flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 h-[320px] w-[300px] flex-shrink-0"
              onClick={() => {
                if (prize.image) {
                  setSelectedPrize(prize);
                  setIsModalOpen(true);
                }
              }}
            >
              <div className={getPrizeStyle(prize, index)}>
                {/* Prize Image */}
                {prize.image && (
                  <div className="mb-4 w-24 h-24 flex items-center justify-center">
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

                {/* Prize Icon (fallback if no image) */}
                {!prize.image && (
                  <div className="mb-4 w-16 h-16 flex items-center justify-center">
                    {getPrizeIcon(prize, index)}
                  </div>
                )}

                {/* Prize Name */}
                <h3 className="text-lg font-semibold text-springBlue text-center mb-2">
                  {prize.name}
                </h3>

                {/* Prize Description */}
                <p className="text-sm text-gray-600 text-center mb-3 leading-relaxed">
                  {prize.description}
                </p>

                {/* Value Badge */}
                {prize.value && (
                  <Badge
                    variant="secondary"
                    className="bg-springBlue/10 text-springBlue text-xs font-medium"
                  >
                    {prize.value}
                  </Badge>
                )}

                {/* Sponsor Info */}
                {prize.sponsor && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    <span>by</span>
                    {prize.sponsorLogos ? (
                      <div className="flex items-center gap-2">
                        {prize.sponsorLogos.map((sponsor, index) => (
                          <a
                            key={index}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            title={sponsor.name}
                          >
                            <img
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              className="h-4 w-auto"
                            />
                          </a>
                        ))}
                      </div>
                    ) : prize.sponsorLogo ? (
                      <a
                        href={prize.sponsorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={prize.sponsorLogo}
                          alt={`${prize.sponsor} logo`}
                          className="h-4 w-auto"
                        />
                      </a>
                    ) : (
                      <span className="font-medium">{prize.sponsor}</span>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Prize Modal */}
      <PrizeModal
        prize={selectedPrize}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPrize(null);
        }}
      />
    </div>
  );
}
