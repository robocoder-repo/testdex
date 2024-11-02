
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ThemeToggle } from "@/components/theme-toggle";

const TokenSelector = ({ value, onChange }) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full bg-background border-input text-foreground">
      <SelectValue placeholder="Select token" />
    </SelectTrigger>
    <SelectContent className="bg-background border-input">
      <SelectItem value="TON" className="text-foreground">TON</SelectItem>
      <SelectItem value="USDT" className="text-foreground">USDT</SelectItem>
      <SelectItem value="BTC" className="text-foreground">BTC</SelectItem>
      <SelectItem value="ETH" className="text-foreground">ETH</SelectItem>
    </SelectContent>
  </Select>
);

const SwapForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [estimatedReceive, setEstimatedReceive] = useState("0");

  const handleSwap = () => {
    console.log(`Swapping ${amount} ${fromToken} to ${toToken}`);
    alert(`Swapped ${amount} ${fromToken} to ${estimatedReceive} ${toToken}`);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setEstimatedReceive((parseFloat(e.target.value) * 0.98).toFixed(2));
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <TokenSelector value={fromToken} onChange={setFromToken} />
            <Input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} className="bg-input text-input-foreground" />
          </div>
          <div className="space-y-2">
            <TokenSelector value={toToken} onChange={setToToken} />
            <Input type="number" placeholder="You will receive" value={estimatedReceive} readOnly className="bg-input text-input-foreground" />
          </div>
          <Button onClick={handleSwap} className="w-full">Swap</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const LimitOrderForm = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handlePlaceOrder = () => {
    console.log(`Placing limit order: ${amount} ${fromToken} to ${toToken} at price ${price}`);
    alert(`Limit order placed: ${amount} ${fromToken} to ${toToken} at price ${price}`);
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <TokenSelector value={fromToken} onChange={setFromToken} />
            <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-input text-input-foreground" />
          </div>
          <div className="space-y-2">
            <TokenSelector value={toToken} onChange={setToToken} />
            <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-input text-input-foreground" />
          </div>
          <Button onClick={handlePlaceOrder} className="w-full">Place Order</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PoolForm = () => {
  const [token1, setToken1] = useState("");
  const [token2, setToken2] = useState("");
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");

  const handleAddLiquidity = () => {
    console.log(`Adding liquidity: ${amount1} ${token1} and ${amount2} ${token2}`);
    alert(`Liquidity added: ${amount1} ${token1} and ${amount2} ${token2}`);
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <TokenSelector value={token1} onChange={setToken1} />
            <Input type="number" placeholder="Amount" value={amount1} onChange={(e) => setAmount1(e.target.value)} className="bg-input text-input-foreground" />
          </div>
          <div className="space-y-2">
            <TokenSelector value={token2} onChange={setToken2} />
            <Input type="number" placeholder="Amount" value={amount2} onChange={(e) => setAmount2(e.target.value)} className="bg-input text-input-foreground" />
          </div>
          <Button onClick={handleAddLiquidity} className="w-full">Add Liquidity</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const StakeForm = () => {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState(30);

  const handleStake = () => {
    console.log(`Staking ${amount} ${token} for ${duration} days`);
    alert(`Staked ${amount} ${token} for ${duration} days`);
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="space-y-4">
          <TokenSelector value={token} onChange={setToken} />
          <Input type="number" placeholder="Amount to stake" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-input text-input-foreground" />
          <div className="space-y-2">
            <p className="text-foreground">Staking duration: {duration} days</p>
            <Slider
              min={1}
              max={365}
              step={1}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              className="w-full"
            />
          </div>
          <Button onClick={handleStake} className="w-full">Stake Tokens</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MarketData = () => (
  <div className="grid grid-cols-4 gap-4 mb-6">
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">TON Price</p>
        <p className="font-bold text-foreground text-2xl">$1.23</p>
      </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">24h Volume</p>
        <p className="font-bold text-foreground text-2xl">$1,234,567</p>
      </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">24h Change</p>
        <p className="font-bold text-green-500 text-2xl">+5.67%</p>
      </CardContent>
    </Card>
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">TVL</p>
        <p className="font-bold text-foreground text-2xl">$98,765,432</p>
      </CardContent>
    </Card>
  </div>
);

export default function DEXExchange() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">TON DEX Exchange</h1>
            <div className="flex items-center space-x-4">
              <Tabs defaultValue="swap" className="w-2/3">
                <TabsList className="grid w-full grid-cols-5 bg-muted">
                  <TabsTrigger value="swap">Swap</TabsTrigger>
                  <TabsTrigger value="limit">Limit</TabsTrigger>
                  <TabsTrigger value="pool">Pool</TabsTrigger>
                  <TabsTrigger value="stake">Stake</TabsTrigger>
                  <TabsTrigger value="more">More</TabsTrigger>
                </TabsList>
              </Tabs>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <MarketData />
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue="swap" className="w-full">
              <TabsContent value="swap">
                <SwapForm />
              </TabsContent>
              <TabsContent value="limit">
                <LimitOrderForm />
              </TabsContent>
              <TabsContent value="pool">
                <PoolForm />
              </TabsContent>
              <TabsContent value="stake">
                <StakeForm />
              </TabsContent>
              <TabsContent value="more">
                <Card className="bg-card text-card-foreground">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">More Options</h2>
                    <div className="space-y-4">
                      <Button className="w-full bg-muted hover:bg-muted/80 text-foreground text-left justify-start">
                        <div>
                          <p className="font-bold">Governance</p>
                          <p className="text-sm text-muted-foreground">Participate in DAO voting</p>
                        </div>
                      </Button>
                      <Button className="w-full bg-muted hover:bg-muted/80 text-foreground text-left justify-start">
                        <div>
                          <p className="font-bold">Farming</p>
                          <p className="text-sm text-muted-foreground">Earn rewards by providing liquidity</p>
                        </div>
                      </Button>
                      <Button className="w-full bg-muted hover:bg-muted/80 text-foreground text-left justify-start">
                        <div>
                          <p className="font-bold">Analytics</p>
                          <p className="text-sm text-muted-foreground">View detailed market analytics</p>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">Swap TON to USDT</p>
                        <p className="text-sm text-muted-foreground">2 minutes ago</p>
                      </div>
                      <p className="text-green-500">Completed</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
