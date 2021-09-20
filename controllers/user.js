import { response } from 'express'

export const getUser = (req, res = response) => {
  res.json({
    msg: 'get api'
  })
}

export const putUser = (req, res = response) => {
  res.status(400).json({
    msg: 'put api'
  })
}

export const postUser = (req, res = response) => {
  res.status(201).json({
    msg: 'post api'
  })
}

export const deleteUser = (req, res = response) => {
  res.json({
    msg: 'delete api'
  })
}
