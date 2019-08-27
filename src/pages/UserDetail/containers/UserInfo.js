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
    address, company, email, phone, website,
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
                <Text as="label">City: {address.city}</Text>
                <Text as="label">Street: {address.street}</Text>
                <Text as="label">Suite: {address.suite}</Text>
                <Text as="label">Zipcode: {address.zipcode}</Text>
                <Text as="label">Geo: lat:{address.geo.lat} lang:{address.geo.lang}</Text>
              </>
            )}
          />
          <InfoList label="Website" value={website} />
          <InfoList
            label="Company"
            value={(
              <>
                <Text as="label">Name: {company.name}</Text>
                <Text as="label">Catch Phrase: {company.catchPhrasa}</Text>
                <Text as="label">bs: {company.bs}</Text>
              </>
            )}
          />
        </tbody>
      </Table>
    </Root>
  )
}

export default UserInfo
