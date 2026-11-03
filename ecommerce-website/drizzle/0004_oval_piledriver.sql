ALTER TABLE "bills" ADD COLUMN "subtotal" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "shipping" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "discount" numeric(10, 2) NOT NULL;