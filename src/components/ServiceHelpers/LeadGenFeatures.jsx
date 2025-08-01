const features = [
  {
    number: "01",
    title: "Targeted Lead Acquisition",
    content:
      "We focus on identifying and attracting your ideal customers through data-driven targeting across platforms like LinkedIn, Google Ads, and email marketing.",
  },
  {
    number: "02",
    title: "Automated Lead Nurturing",
    content:
      "Leverage email sequences, retargeting, and CRM integrations to keep leads engaged until they’re ready to convert.",
  },
  {
    number: "03",
    title: "Performance Optimization",
    content:
      "We continuously analyze and optimize every step of the funnel to improve cost-per-lead (CPL), lead quality, and overall campaign performance.",
    fullWidth: true,
  },
];

export default function LeadGenFeatures() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl border border-gray-200 shadow-sm bg-gray-50 ${
            feature.fullWidth ? "md:col-span-2" : ""
          }`}
        >
          <div className="text-blue-600 text-xl font-semibold mb-2">
            {feature.number}
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-700">{feature.content}</p>
        </div>
      ))}
    </section>
  );
}
