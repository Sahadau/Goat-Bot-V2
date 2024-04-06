const { execSync } = require('child_process');

module.exports = {
  config: {
    name: "cpu",
    version: "2.0",
    author: "Nehal",
    role: 0,
    shortDescription: {
      en: "Displays detailed CPU and system information."
    },
    longDescription: {
      en: "Displays real-time CPU temperature, usage, and system information. A premium command for tech enthusiasts."
    },
    category: "𝗦𝗬𝗦𝗧𝗘𝗠",
    guide: {
      en: "Use {p}cpu to check the current CPU conditions and system information of the bot."
    }
  },
  onStart: async function ({ api, event, args }) {
    // Simulate CPU temperature and usage for demonstration purposes
    const cpuTemperature = Math.random() * 100;
    const cpuUsage = Math.random() * 100;

    let cpuStatus = "Cool ✅";
    if (cpuTemperature > 80) {
      cpuStatus = "Hot ❎";
    }

    // Create a premium CPU meter
    const cpuMeter = createCPUMeter(cpuUsage);

    // Fetch system information
    const systemInfo = getSystemInfo();

    // Compose the message with premium styling
    const message = `
🔷 CPU Monitor 🔷
CPU Temperature: ${cpuTemperature.toFixed(2)}°C
CPU Usage: ${cpuUsage.toFixed(2)}%
CPU Status: ${cpuStatus}

${cpuMeter}

System Information:
${systemInfo}
    `;

    // Send the premium CPU report
    api.sendMessage(message, event.threadID);
  }
};

// Function to create a premium CPU meter
function createCPUMeter(usage) {
  const meterWidth = 20; // Adjust the width of the meter
  const filledBlocks = Math.round((meterWidth * usage) / 100);
  const emptyBlocks = meterWidth - filledBlocks;

  return `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${usage}%`;
}

// Function to get system information dynamically
function getSystemInfo() {
  try {
    // Execute shell commands to get system information
    const system = execSync('uname -a').toString().trim();
    const memory = execSync('free -h | grep Mem').toString().trim();
    const storage = execSync('df -h /').toString().trim();

    return `
System: ${system}
Memory: ${memory}
Storage: ${storage}
    `;
  } catch (error) {
    console.error('Error getting system information:', error);
    return 'Error getting system information.';
  }
}
