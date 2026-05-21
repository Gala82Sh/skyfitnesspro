import coursesData from './coursesData.json'

export interface Course {
  _id: string
  nameRU: string
  description: string
  directions: string[]
  fitting: string[]
  difficulty: string
  durationInDays: number
  dailyDurationInMinutes: { from: number; to: number }
}

export async function getCourseById(id: string): Promise<Course> {
  
  const course = coursesData[id as keyof typeof coursesData]
  if (!course) throw new Error('Курс не найден')
  return course as Course
}