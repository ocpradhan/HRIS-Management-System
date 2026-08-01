-- CreateEnum
CREATE TYPE "ReviewPeriod" AS ENUM ('Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL', 'PROBATION');

-- CreateTable
CREATE TABLE "PerformanceReview" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "period" "ReviewPeriod" NOT NULL,
    "year" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "strengths" TEXT,
    "improvements" TEXT,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerformanceReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PerformanceReview_employeeId_period_year_key" ON "PerformanceReview"("employeeId", "period", "year");

-- AddForeignKey
ALTER TABLE "PerformanceReview" ADD CONSTRAINT "PerformanceReview_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceReview" ADD CONSTRAINT "PerformanceReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
