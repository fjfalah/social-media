import React from 'react'
import styled from 'styled-components'
import { Card, Table } from 'reactstrap'
import { Text } from '../../../components'
import theme from '../../../constants/theme'

const Root = styled(Card)`
  padding: 10px;
`

const InfoList = ({ label, value }) => {
  return (
    <tr>
      <td><Text color={theme.color.grey}>{label}</Text></td>
      <td><Text>{value}</Text></td>
    </tr>
  )
}

const UserInfo = ({ user }) => {
  const {
    address, company, email, id, name, phone, posts, username, website,
  } = user

  return (
    <Root>
      <Table>
        <tbody>
          <InfoList label="Email" value={email} />
          <InfoList label="Phone" value={phone} />
          <InfoList
            label="Address"
            value={(
              <>
                <Text>City: {address.city}</Text>
                <Text>Street: {address.street}</Text>
                <Text>Suite: {address.suite}</Text>
                <Text>Zipcode: {address.zipcode}</Text>
                <Text>Geo: lat:{address.geo.lat} lang:{address.geo.lang}</Text>
              </>
            )}
          />
          <InfoList label="Website" value={website} />
          <InfoList
            label="Company"
            value={(
              <>
                <Text>Name: {company.name}</Text>
                <Text>Catch Phrase: {company.catchPhrasa}</Text>
                <Text>bs: {company.bs}</Text>
              </>
            )}
          />
        </tbody>
      </Table>
    </Root>
  )
}

export default UserInfo
