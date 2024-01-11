async function getData(_url: string) {
  try {
    const res = await fetch(_url);
    return {
      data: res.ok ? await res.json() : null,
      success: res.ok,
      status: res.status,
      error: res.statusText,
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export { getData };
