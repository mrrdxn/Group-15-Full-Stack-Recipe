ALTER TABLE "favorites" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "favorites" ALTER COLUMN "created_at" DROP NOT NULL;