ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "rating" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "colors" text[];--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "sizes" text[];--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "badge" varchar(100);