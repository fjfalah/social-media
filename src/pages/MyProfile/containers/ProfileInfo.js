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

const ProfileInfo = ({ account }) => {
  const {
    address, company, email, phone, website,
  } = account

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
                <Text as="h5">Street: {address.street}</Text>
                <Text as="h5">Suite: {address.suite}</Text>
                <Text as="h5">City: {address.city}</Text>
                <Text as="h5">Zipcode: {address.zipcode}</Text>
                <Text as="h5">Geo: lat:{address.geo.lat} lng:{address.geo.lng}</Text>
              </>
            )}
          />
          <InfoList label="Website" value={website} />
          <InfoList
            label="Company"
            value={(
              <>
                <Text as="h5">Name: {company.name}</Text>
                <Text as="h5">Catch Phrase: {company.catchPhrase}</Text>
                <Text as="h5">bs: {company.bs}</Text>
              </>
            )}
          />
        </tbody>
      </Table>
    </Root>
  )
}

export default ProfileInfo
