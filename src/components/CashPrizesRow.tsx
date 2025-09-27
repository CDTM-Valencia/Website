import { Prize } from '@/constants/prizes';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal } from 'lucide-react';

interface CashPrizesRowProps {
  prizes: Prize[];
  className?: string;
}

export function CashPrizesRow({ prizes, className = '' }: CashPrizesRowProps) {
  const getPrizeStyle = (prize: Prize, index: number) => {
    const baseStyle =
      'relative flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full min-h-[280px]';

    if (prize.name.toLowerCase().includes('first')) {
      return `${baseStyle} bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 shadow-lg`;
    } else if (prize.name.toLowerCase().includes('second')) {
      return `${baseStyle} bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 shadow-lg`;
    } else {
      return `${baseStyle} bg-gradient-to-br from-springPaleBlue to-white border-2 border-springBlue/20 shadow-md`;
    }
  };

  const getPrizeIcon = (prize: Prize) => {
    if (prize.name.toLowerCase().includes('first')) {
      return <Trophy className="w-12 h-12 text-yellow-600 mb-4" />;
    } else if (prize.name.toLowerCase().includes('second')) {
      return <Medal className="w-10 h-10 text-gray-600 mb-4" />;
    } else {
      return <Trophy className="w-8 h-8 text-springBlue mb-4" />;
    }
  };

  return (
    <div className={`mb-12 ${className}`}>
      <div className="text-center mb-8">
        <p className="text-gray-600">Monetary rewards for the top teams</p>
      </div>

      <div className="flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 h-[320px] w-[300px] flex-shrink-0"
            >
              <div className={getPrizeStyle(prize, index)}>
                {/* Prize Icon */}
                <div className="mb-4">{getPrizeIcon(prize)}</div>

                {/* Prize Name */}
                <h3 className="text-2xl font-bold text-springBlue text-center mb-3">
                  {prize.name}
                </h3>

                {/* Prize Description */}
                <p className="text-lg text-gray-600 text-center mb-4">
                  {prize.description}
                </p>

                {/* Value Badge */}
                {prize.value && (
                  <Badge
                    variant="secondary"
                    className="bg-springBlue/10 text-springBlue text-lg font-semibold px-4 py-2"
                  >
                    {prize.value}
                  </Badge>
                )}

                {/* Sponsor Info */}
                {prize.sponsor && (
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                    <span>Sponsored by</span>
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
                          className="h-6 w-auto"
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
    </div>
  );
}
