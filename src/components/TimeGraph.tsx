import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock } from 'lucide-react';

const data = [
  { name: 'Week 1', Manual: 40, AI: 8 },
  { name: 'Week 2', Manual: 38, AI: 6 },
  { name: 'Week 3', Manual: 42, AI: 7 },
  { name: 'Week 4', Manual: 35, AI: 5 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4">
        <p className="font-inter font-semibold">{label}</p>
        <p className="text-neon-blue">Manual: {payload[0].value} hours</p>
        <p className="text-neon-purple">AI: {payload[1].value} hours</p>
        <p className="text-green-400 font-semibold">
          Time Saved: {payload[0].value - payload[1].value} hours
        </p>
      </div>
    );
  }
  return null;
};

export const TimeGraph = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-neon-blue mr-2" />
            <h2 className="text-3xl md:text-4xl font-inter font-bold gradient-text">
              Time Savings with AI Automation
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI automation drastically reduces time spent on repetitive tasks,
            saving up to 85% of your valuable business hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 rounded-xl"
        >
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="manualGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B026FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#B026FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="name"
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.8)' }}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.8)' }}
                  label={{
                    value: 'Hours per Week',
                    angle: -90,
                    position: 'insideLeft',
                    style: { fill: 'rgba(255,255,255,0.8)' }
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="Manual"
                  stroke="#00F0FF"
                  fillOpacity={1}
                  fill="url(#manualGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="AI"
                  stroke="#B026FF"
                  fillOpacity={1}
                  fill="url(#aiGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-4 text-center">
              <h3 className="font-inter font-semibold mb-2">Average Time Saved</h3>
              <p className="text-3xl font-bold text-green-400">85%</p>
            </div>
            <div className="glass-card p-4 text-center">
              <h3 className="font-inter font-semibold mb-2">Hours Saved Weekly</h3>
              <p className="text-3xl font-bold text-green-400">32+</p>
            </div>
            <div className="glass-card p-4 text-center">
              <h3 className="font-inter font-semibold mb-2">Monthly ROI</h3>
              <p className="text-3xl font-bold text-green-400">4.2x</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};