import React from 'react'
import { Star } from 'react-bootstrap-icons'

function StarRate({ rate }) {
  const starEl = [...Array(rate)].map((_, i) => <Star key={i} />)
  return (
  <span>{starEl}</span>
  )}

export default StarRate