const API_BASE_URL = "https://wedev-api.sky.pro/api/fitness";


export async function getAllCourses() {
  const res = await fetch(`${API_BASE_URL}/courses`);
  if (!res.ok) throw new Error('Ошибка загрузки курсов');
  return res.json();
}

export interface Course {
  _id: string;
  nameRU: string;
  description: string;
  directions: string[];
  fitting: string[];
  difficulty: string;
  durationInDays: number;
  dailyDurationInMinutes: { from: number; to: number };
}

export async function getCourseById(id: string): Promise<Course> {
  console.log('Запрашиваю курс с ID:', id);
  const res = await fetch(`${API_BASE_URL}/courses/${id}`);
  console.log('Статус:', res.status);
  if (!res.ok) {
    const text = await res.text();
    console.error('Ошибка:', text);
    throw new Error(text);
  }
  const data = await res.json();
  console.log('Данные:', data);
  return data;
}
