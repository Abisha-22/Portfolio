export const profile = {
  name: 'Abisha V',
  title: 'IoT & Embedded Systems Engineer',
  mainSkill: '"Building the bridge between sensors, firmware, and the cloud"',
  location: 'Bangalore, India',
  email: 'abishavelan@gmail.com',
  phone: '6385308467',
  linkedin: 'https://linkedin.com/in/abisha-v-640434262',
  github: 'http://github.com/Abisha-22',
  summary:
    'IoT/Embedded Systems Intern building firmware and wireless sensor systems on ESP32 and Raspberry Pi. Experience spans smart agriculture and industrial automation (PLC/IIoT), with exposure to telecom infrastructure, and strong hands-on skills in sensor interfacing, hardware debugging, and embedded C/C++.',
}

export const projects = [
  {
    slug: 'fruit-ripeness-predictor',
    name: 'ML-Based Fruit Detection & IoT-Enabled Ripeness/Spoilage Predictor',
    period: 'Jan 2026 – Apr 2026',
    tagline: 'A computer-vision and IoT pipeline that flags spoilage before it reaches the consumer.',
    icon: 'cv',
    goal: 'Build a system that can classify fruit quality and predict spoilage automatically, combining on-device sensing with computer vision to reduce manual inspection and post-harvest waste.',
    role: 'Sole builder — designed the vision pipeline, wired up ESP32-based gas and environment sensing, trained the classification model, and built the cloud backend for live monitoring.',
    tools: ['TensorFlow', 'MobileNet', 'OpenCV', 'ESP32', 'MQ-135', 'MQ-3', 'DHT22', 'Firebase (NoSQL)', 'Python'],
    result: 'Reached 92% classification accuracy across Mango, Apple, Banana, and Tomato. Built a Firebase-integrated cloud solution for real-time data acquisition and threshold-based ripeness and spoilage prediction, logging data every 60 seconds.',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Fruit classes', value: '4' },
      { label: 'Telemetry interval', value: '60s' },
    ],
  },
  {
    slug: 'smart-bin-waste-segregation',
    name: 'Automated Smart Bin for Wet and Dry Waste Segregation',
    period: 'May 2025',
    tagline: 'Multi-sensor firmware that sorts waste in real time, no manual input needed.',
    icon: 'sensor',
    goal: 'Automate wet and dry waste segregation at the point of disposal using low-cost sensor fusion, instead of relying on manual sorting.',
    role: 'Firmware developer — built the real-time classification logic and sensor fusion layer from scratch on bare-metal hardware.',
    tools: ['Arduino IDE','Arduino ATmega328P', 'Ultrasonic sensor', 'IR sensor', 'Moisture sensor', 'Embedded C/C++'],
    result: 'Delivered an IoT-enabled smart waste segregation system with 95% classification accuracy, fusing ultrasonic, infrared, and moisture readings to distinguish waste types on-device.',
    metrics: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Sensors fused', value: '3' },
      { label: 'Processing', value: 'On-device' },
    ],
  },
  {
    slug: 'Iot-smart-irrigation',
    name: 'IoT-Based Pot-wise Smart Irrigation System',
    period: 'May 2026 – Present',
    tagline: 'Research & development on a wireless sensor system that waters crops on its own.',
    icon: 'signal',
    goal: 'As part of an IoT internship, research and develop a smart irrigation system that senses field conditions and drives actuators automatically, over a reliable wireless link.',
    role: 'IoT Intern, R&D — building embedded firmware for sensor interfacing and actuator control, and integrating, validating, and debugging the hardware and wireless stack.',
    tools: ['Embedded C/C++', 'Python', 'ESP32', 'Raspberry Pi', 'MQTT', 'Wi-Fi', 'Zigbee'],
    result: 'Built embedded firmware that processes sensor data every 3 seconds and drives actuator control, while optimizing wireless communication, system reliability, and overall performance through iterative hardware and firmware debugging.',
    metrics: [
      { label: 'Sensor interval', value: '3s' },
      { label: 'Protocols', value: 'MQTT / Zigbee' },
      { label: 'Platforms', value: 'ESP32, RPi' },
    ],
  },
  {
    slug: 'plc-bag-scanning',
    name: 'PLC-Based Automated Bag Scanning System',
    period: 'Jul 2025 – Aug 2025',
    tagline: 'Ladder-logic control and cloud-connected monitoring for a manufacturing line.',
    icon: 'plc',
    goal: 'Automate bag scanning on a manufacturing line and connect the edge hardware to cloud services for remote monitoring, during a PLC & Industrial IoT internship.',
    role: 'PLC Programming & Industrial IoT Intern — developed the control software and the Node-RED workflow that bridges edge devices to the cloud.',
    tools: ['Siemens S7-1200', 'TIA Portal', 'Ladder Logic', 'Node-RED', 'IIoT Cloud'],
    result: 'Developed control software for the Automated Bag Scanning System on a Siemens S7-1200 PLC, plus Node-RED workflows for IIoT connectivity and remote monitoring.',
    metrics: [
      { label: 'Controller', value: 'S7-1200' },
      { label: 'Logic', value: 'Ladder' },
      { label: 'Monitoring', value: 'Cloud-connected' },
    ],
  },
]

export const experience = [
  {
    company: 'Mediacreche Solutions Pvt. Ltd.',
    role: 'IoT Intern — R&D, Smart Irrigation System',
    period: 'May 2026 – Present',
    location: 'Bangalore, India',
  },
  {
    company: 'Tamil Nadu Smart & Advanced Manufacturing Centre (TANSAM)',
    role: 'PLC Programming & Industrial IoT Intern',
    period: 'Jul 2025 – Aug 2025',
    location: 'Chennai, India',
  },
  {
    company: 'Bharat Sanchar Nigam Limited (BSNL)',
    role: 'Telecom Engineer Intern',
    period: 'Feb 2025',
    location: 'Nagercoil, India',
  },
]

export const education = {
  school: 'Anna University Regional Campus',
  degree: 'B.E. (Honours) in Electronics and Communication Engineering',
  period: 'Nov 2022 – May 2026',
  cgpa: '8.34 / 10',
  coursework: [
    'Embedded Systems',
    'IoT',
    'Artificial Intelligence & Machine Learning',
    'Networks & Security',
    'Digital Electronics',
    'VLSI Design',
    'Wireless Sensor Networks',
  ],
}

export const priorEducation = [
  {
    school: 'St. Joseph Convent Higher Secondary School',
    level: 'Higher Secondary',
    period: '2021',
    score: '89.16%',
  },
  {
    school: 'Hebron Matriculation Higher Secondary School',
    level: 'High School',
    period: '2019',
    score: '87.2%',
  },
]

export const skills = {
  Languages: ['Python', 'C', 'Embedded C/C++', 'HTML/CSS', 'Ladder Logic (LAD)'],
  'Embedded Systems': ['ESP32', 'Raspberry Pi', 'Arduino ATmega328P', 'Siemens S7-1200 PLC'],
  'IoT & Communication': ['MQTT', 'Zigbee', 'Wi-Fi', 'BLE'],
  'Hardware Skills': ['Sensor Interfacing', 'Hardware Debugging', 'Soldering & PCB Assembly and Testing', 'GPIO control'],
  'Machine Learning & Computer Vision': ['OpenCV', 'MobileNet', 'TensorFlow'],
  Tools: ['Arduino IDE', 'VS Code', 'Firebase Console', 'MATLAB', 'TIA Portal', 'Node-RED', 'GitHub', 'Linux', 'KiCAD'],
}

export const softSkills = ['Leadership', 'Team Collaboration', 'Problem Solving', 'Quick Learner', 'Time Management']

export const interests = ['Internet of Things', 'Embedded Systems', 'PLC Programming', 'Computer Vision', 'AI/ML', 'Networking']

export const certificates = [
  { name: 'Thoothukudi District Police Hackathon', issuer: '2025' },
  { name: 'Network Essentials', issuer: 'Naan Mudhalvan' },
  { name: 'Advanced ADAS', issuer: 'Naan Mudhalvan' },
  { name: 'Employability Skills Development', issuer: 'Titan Leap' },
  { name: 'ADAS ECU', issuer: 'Naan Mudhalvan' },
  { name: 'Baremetal Programming STM32', issuer: 'In progress' },
]
 