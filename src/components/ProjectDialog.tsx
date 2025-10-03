import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Project } from '@/constants/projects';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Helper function to check if a YouTube URL can be embedded
function isEmbeddableYouTubeUrl(url: string): boolean {
  if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
    return false;
  }

  // These URL patterns cannot be embedded directly
  const nonEmbeddablePatterns = [
    '/channel/',
    '/@',
    '/c/',
    '/user/',
    '/playlist',
  ];

  return !nonEmbeddablePatterns.some((pattern) => url.includes(pattern));
}

// Helper function to convert YouTube URL to embed format
function convertToEmbedUrl(url: string): string {
  if (url.includes('youtu.be/')) {
    // Handle youtu.be format: https://youtu.be/VIDEO_ID
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes('youtube.com/shorts/')) {
    // Handle YouTube Shorts format: https://youtube.com/shorts/VIDEO_ID
    const videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes('youtube.com/watch?v=')) {
    // Handle standard YouTube format: https://www.youtube.com/watch?v=VIDEO_ID
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Fallback - return original URL (this shouldn't happen if isEmbeddableYouTubeUrl is working correctly)
  return url;
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[calc(100vw-1rem)] sm:w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white mx-auto p-4 sm:p-6">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold leading-tight">
            {project.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-video w-full">
            {isEmbeddableYouTubeUrl(project.videoUrl) ? (
              <iframe
                src={convertToEmbedUrl(project.videoUrl)}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.name} video`}
              />
            ) : (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200"
              >
                <div className="flex flex-col items-center gap-2">
                  <ExternalLink className="w-8 h-8 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Click to open video
                  </span>
                </div>
              </a>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">One Sentence Pitch</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.oneSentencePitch}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                What Is Your Project?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.whatIsProject}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How You Built It</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.howBuilt}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Difficulties You Faced
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.difficulties}
              </p>
            </div>

            {(project.placement || project.challenges?.length) && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                <div className="space-y-2">
                  {project.placement && (
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 hover:bg-yellow-100 text-yellow-800"
                      >
                        {project.placement === 1 ? '1st Place' : '2nd Place'} in{' '}
                        {project.case.charAt(0).toUpperCase() +
                          project.case.slice(1)}{' '}
                        Case
                      </Badge>
                    </div>
                  )}
                  {project.challenges?.map((challenge, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <Badge
                        variant="secondary"
                        className="bg-blue-200/60 hover:bg-blue-200/60 text-blue-800"
                      >
                        "{challenge.name}" Challenge by {challenge.sponsoredBy}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm sm:text-base">Source Code</span>
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm sm:text-base">Try Demo</span>
                    </a>
                  </Button>
                )}
              </div>
              <Button asChild className="w-full">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <span className="text-sm sm:text-base">
                    {project.videoUrl.includes('youtube.com') ||
                    project.videoUrl.includes('youtu.be')
                      ? 'Watch on YouTube'
                      : 'Watch Video'}
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
