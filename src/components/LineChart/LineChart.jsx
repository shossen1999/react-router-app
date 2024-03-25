import { LineChart as LChart, Line,XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarksData =
    [
        {"id": 1, "name": "Student A", "math": 85, "physics": 78, "chemistry": 82},
  {"id": 2, "name": "Student B", "math": 92, "physics": 88, "chemistry": 75},
  {"id": 3, "name": "Student C", "math": 76, "physics": 83, "chemistry": 90},
  {"id": 4, "name": "Student D", "math": 88, "physics": 91, "chemistry": 85},
  {"id": 5, "name": "Student E", "math": 95, "physics": 84, "chemistry": 92},
  {"id": 6, "name": "Student F", "math": 68, "physics": 70, "chemistry": 72},
  {"id": 7, "name": "Student G", "math": 74, "physics": 79, "chemistry": 65},
  {"id": 8, "name": "Student H", "math": 90, "physics": 86, "chemistry": 88},
  {"id": 9, "name": "Student I", "math": 82, "physics": 79, "chemistry": 84},
  {"id": 10, "name": "Student J", "math": 79, "physics": 73, "chemistry": 78}
      ]
      
    return (
        <div>
            <LChart width={1400} height={400} data={studentMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
              <Line dataKey={'math'} stroke='red'></Line>
              <Line dataKey={'physics'} stroke='yellow'></Line>
              <Line dataKey={'chemistry'} stroke='blue'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;