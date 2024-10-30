export const submitMealImage = async (imageData: string) => {
  const response = await fetch('/api/meal-analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: imageData })
  });
  if (!response.ok) {
    throw new Error('Failed to submit meal image');
  }
  return response.json();
}
