// components/SummaryChart.jsx
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SummaryChart = ({ receivable, payable }) => {
  const total = receivable + payable;
  const percentage = receivable / total;

  const radius = 60;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <View style={styles.container}>
      <Svg height="150" width="150">
        <Circle
          stroke="#f44336" // Red for payable
          cx="75"
          cy="75"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          stroke="#4caf50" // Green for receivable
          cx="75"
          cy="75"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          rotation="-90"
          origin="75,75"
        />
      </Svg>
      <Text style={styles.percentText}>{Math.round(percentage * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 24,
    position: 'relative',
  },
  percentText: {
    position: 'absolute',
    top: 60,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SummaryChart;
