-- CreateEnum
CREATE TYPE "Rating" AS ENUM ('Half', 'One', 'OneAndHalf', 'Two', 'TwoAndHalf', 'Three', 'ThreeAndHalf', 'Four', 'FourAndHalf', 'Five');

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "rating" "Rating" NOT NULL,
    "album" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);
