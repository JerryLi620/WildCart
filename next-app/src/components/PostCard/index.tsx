import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/models/Post";
import Image from "next/image";
import { Button } from "@/components/ui/button";
/**
 * Responsible for rendering a user display, showing the user's avatar and name.
 *
 * @TODO make user data dynamic
 *
 * @returns a user display, for use in the post card
 */
function UserDisplay() {
  return (
    <div className="flex items-center space-x-2 leading-tight">
      <Avatar>
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <div>
        <p>John Doe</p>
        <p className="text-xs">Level 40</p>
      </div>
    </div>
  );
}

/**
 * Responsible for rendering a card that represents a post.
 *
 * @TODO add functionality to the buttons
 * @TODO make user data dynamic
 *
 * @returns a card that represents a post, for use in the market page
 */
export default function PostCard({ post }: Readonly<{ post: Post }>) {
  const imageUrl = `data:image/jpeg;base64,${post.picture.toString("base64")}`;

  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0 grow">
        <div className="relative h-48 w-full rounded-lg">
          <Image
            src={imageUrl}
            className="object-cover rounded-t-lg"
            alt="Post Image"
            fill
          />
        </div>
        <div className="px-4 pt-2 space-y-2">
          <CardTitle>{post.name}</CardTitle>
          <UserDisplay />
          <CardDescription className="line-clamp-3">
            {post.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className=" grid grid-cols-2 gap-2 mt-4">
          <Button>Offer</Button>
          <Button variant="outline">Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}
