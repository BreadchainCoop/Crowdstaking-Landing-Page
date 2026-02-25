"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"

export function InterestCalculator() {
  const [targetAmount, setTargetAmount] = useState(2000)

  // Fixed APY at 7%
  const assumedAPY = 7.0

  // Calculate required total staked amount
  const requiredTotalStaked = (targetAmount * 12) / (assumedAPY / 100)

  // Calculate optimal scenario within constraints
  const calculateOptimalScenario = () => {
    let optimalMembers = 350
    let optimalStake = Math.ceil(requiredTotalStaked / optimalMembers)

    if (optimalStake > 1000) {
      optimalMembers = 500
      optimalStake = Math.ceil(requiredTotalStaked / optimalMembers)
    }

    if (optimalStake < 100) {
      optimalMembers = Math.min(500, Math.ceil(requiredTotalStaked / 100))
      optimalStake = Math.ceil(requiredTotalStaked / optimalMembers)
    }

    optimalMembers = Math.max(50, Math.min(500, optimalMembers))
    optimalStake = Math.max(100, Math.min(1000, optimalStake))

    return { members: optimalMembers, stake: optimalStake }
  }

  const optimal = calculateOptimalScenario()
  const actualTotalStaked = optimal.members * optimal.stake
  const actualMonthlyInterest = (actualTotalStaked * (assumedAPY / 100)) / 12
  const canMeetTarget = actualMonthlyInterest >= targetAmount

  const handleTargetChange = (value: number[]) => {
    setTargetAmount(value[0])
  }

  return (
    <Card className="p-6 bg-card shadow-2xl border border-border/50">
      <CardHeader className="text-center pb-6">
        <CardTitle className="flex items-center justify-center gap-2 text-4xl font-[var(--font-kufam)]">
          <TrendingUp className="h-6 w-6 text-primary" />
          Community Funding Calculator
        </CardTitle>
        <p className="text-base text-muted-foreground">
          Set your target and see the minimum requirements
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Target Monthly Interest - Editable */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2 text-lg font-bold">
            <Target className="h-5 w-5 text-secondary" />
            Monthly Target Interest
          </Label>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground w-12">$50</span>
            <Slider
              value={[targetAmount]}
              onValueChange={handleTargetChange}
              max={5000}
              min={50}
              step={50}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-12">$5K</span>
          </div>
          <div className="text-center">
            <span className="text-3xl text-primary">
              ${targetAmount.toLocaleString()}
            </span>
            <span className="text-sm text-foreground ml-1">/month</span>
          </div>
        </div>

        {/* Required Parameters - Read Only */}
        <div className="pt-4 border-t border-border space-y-4">
          <h4 className="text-center text-sm text-muted-foreground mb-4">
            Minimum Requirements
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-base text-muted-foreground">
                  Community Members
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl text-secondary">
                  {optimal.members}
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  members minimum
                </span>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-secondary" />
                <span className="text-base text-muted-foreground">
                  Average Stake per Member
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl text-secondary">
                  ${optimal.stake}
                </span>
                <span className="text-sm text-muted-foreground ml-1">per member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-base text-muted-foreground">Total Staked</p>
              <p className="text-lg text-foreground">
                ${actualTotalStaked.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-base text-muted-foreground">APY</p>
              <p className="text-lg text-foreground">{assumedAPY}%</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div>
              <p className="text-base text-muted-foreground">
                Actual Monthly Interest
              </p>
              <p className="text-2xl text-primary">
                $
                {actualMonthlyInterest.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>

            {canMeetTarget ? (
              <Badge
                variant="secondary"
                className="bg-secondary/10 text-secondary text-lg"
              >
                Target achievable!{" "}
                {actualMonthlyInterest >= targetAmount * 1.5
                  ? "With room to spare!"
                  : ""}
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="border-primary/50 text-primary text-lg"
              >
                Target requires parameters outside typical ranges
              </Badge>
            )}
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            * This calculation provides an approximate configuration based on
            your monthly target interest. Calculations based on {assumedAPY}%
            APY. Ranges: 50-500 members, $100-1K stakes.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
