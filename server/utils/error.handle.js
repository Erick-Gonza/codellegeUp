const handleHttpError = (res, error) => {
  res.status(500).send({ error })
}

export { handleHttpError }
