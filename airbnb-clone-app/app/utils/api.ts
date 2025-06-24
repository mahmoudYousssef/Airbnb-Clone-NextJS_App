export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploredata = await res.json();
    return exploredata;
  } catch (error) {
    console.log(error);
  }
};

export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const LiveData = await res.json();
    return LiveData;
  } catch (error) {
    console.log(error);
  }
};