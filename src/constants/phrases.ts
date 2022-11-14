const vocabulary = {
  WHAT_IS_COWORKING: `More and more often we begin to deal with such not entirely clear
  for some, a phenomenon like co-working. What is it? Coworking with
  English "collaboration" and "working", means "joint work". Let's
  try to explain quite simply what the essence of this joint is work
  What is a coworking center? It is something in between the usual
  office space and a room at home. That is...`,
  ADVANTAGES_OF_COWORKING: `In a co-working space, it is possible to rent space for a day, a
  month, year (sometimes even hourly), which can be very convenient
  for freelancers or startups. It is possible to use "minimum
  benefits" - a comfortable workplace (separate desk, internet
  access), tea and coffee, a kitchenette and an entertainment area
  or a place to rest with ...`,
  COFINDER_DESCR: `CoFinfer is a website where you can search, find and reserve
  co-working space, including co-working desks, private offices,
  meeting rooms and virtual offices nearby. Coworking spaces list
  their workspace on our service and describe what functions and
  conveniences it can offer ...`,
  OVNER_OF_COWORKING: `We offer favorable terms of cooperation, an easy and fast way add
  your coworking space to our platform. For those who want to try
  for the first time, we offer a free trial month, no fees risks -
  trust us!`,
};

export default function getText(a: keyof typeof vocabulary) {
  return vocabulary[a];
}
